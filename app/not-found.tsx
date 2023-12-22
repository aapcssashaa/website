const notfound = () => {
    return (
        /* add a button that redirect to the home page or root */
        <div>
            <div className="mt-10 text-blue-500 text-4xl text-center">
                <h1>Home Page</h1>
            </div>
            <div className="mt-20">
                <h1 className="text-blue-500 text-4xl text-center">Not Found</h1>
            </div>  
        </div>
    );
}
export default notfound;