import React from "react";

export default function TestDisplay(props) {
    // REAL API
    const [testData, setTestData] = React.useState(null);
    React.useEffect(() => {
        fetch("/pgnow_api/loadImageList")
          .then((res) => res.json())
          .then((data) => setTestData(data));
    }, []);
    
    var testString = JSON.stringify(testData);
    return <div><p>{testString}</p></div>;
}