const DateComponent = () => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today: number = new Date().getDay();
    return (
        <div className="row-span-2 p-4 rounded-2xl lg:col-span-1 md:col-span-1">
            <div className="flex flex-col text-biege">
                <span className="text-4xl font-medium">{days[today]}</span>
                <span className="font-bold text-7xl">
                    <>{new Date().getDate()}</>
                    <span className="ml-3 text-2xl font-semiBold">
                        {new Date().getMonth()}-{new Date().getFullYear()}
                    </span>
                </span>
                <div className="py-2 pl-4 mt-6 tracking-wide border-l-8 rounded-lg font-regular border-amber-400">
                    Hi Admin you have <span className="text-lime-300">12 accounts</span> that need to be verified
                </div>
            </div>
        </div>
    );
};

export default DateComponent;
