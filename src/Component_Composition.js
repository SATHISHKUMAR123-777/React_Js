import React, { useState, useEffect } from 'react';

const withLoadingIndicator = (WrappedComponent) => {

    return function WithLoadingIndicator(props) {
        const [isLoading, setIsLoading] = useState(false);
        useEffect(() => {
            const fetchData = async () => {
                setIsLoading(true);
                await new Promise(resolve => setTimeout(resolve, 2000));
                setIsLoading(false);
            };
            fetchData();
        }, []);

        return (
            <div>
                {
                    isLoading ? <div>Loading...</div> : <WrappedComponent {...props} />
                }
            </div>
        );
    }
}

const DataComponent = () => {
    return (
        <div>
            <h1>Data Component</h1>
            <p>Data fetched successfully!</p>
        </div>
    );
}
const DataComponentWithLoadingIndicator = withLoadingIndicator(DataComponent);
const Component_composition = () => {
    return (
        <div>
            <DataComponentWithLoadingIndicator />
        </div>
    );
}
export default Component_composition;
