import React, { useEffect, useState } from "react";

import { BankAccountDetailsProps } from "../../types/account";
import { Input } from "./input";
import Modal from "../modal";
import { bankAccountDetailsMock } from "../../mock/account-mock";

interface SearchIFSCProps {
    closeModal?: () => void;
}

const SearchIFSC: React.FC<SearchIFSCProps> = ({ closeModal = () => {} }) => {
    const [accountList, setAccountList] = useState<BankAccountDetailsProps[]>([]);
    const [input, setInput] = useState<string>("");

    useEffect(() => {
        setAccountList(bankAccountDetailsMock);
    }, []);

    const filteredData = accountList.filter((account) => {
        return account?.location?.toLowerCase().includes(input.toLowerCase());
    });

    return (
        <Modal onClose={closeModal}>
            <Input
                className=""
                placeholder="Enter you state/city name"
                value={input}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
            />
            {input && (
                <div className="flex gap-2 flex-wrap mt-4">
                    {filteredData.map((account: BankAccountDetailsProps, key: number) => {
                        return (
                            <div key={key} className="px-4 py-2 bg-yellow text-coal rounded-lg cursor-pointer">
                                <div className="text-base font-medium mb-1">{account?.location}</div>
                                <div className="flex flex-col font-light text-sm leading-4">
                                    <span>IFSC: {account.IFSCCode}</span>
                                    <span>Bank name: {account.bankName}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </Modal>
    );
};

export default SearchIFSC;
