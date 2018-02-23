import React from 'react';

const MainPage = ({mainPageIndex, initialize}) => {
    console.log(mainPageIndex, initialize);
    const test = mainPageIndex;
    return (
        <div onClick={initialize}>
        MainPage {test}
    </div>)
}

export default MainPage;