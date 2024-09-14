const ActiveTab = () => {

    return <div className="flex justify-content gap-x-10 mx-auto">
    <button type="button" className="rounded bg-blue-200 text-black active:bg-blue-500 ">
        All
    </button>
    <button type="button" className="rounded bg-blue-200 text-black active:bg-blue-500 ">
        Active
    </button>
    <button type="button" className="rounded bg-blue-200 text-black active:bg-blue-500 " >
        Complited
    </button>
    </div>
};

export default ActiveTab;