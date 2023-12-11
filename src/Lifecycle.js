import React, { useEffect, useState } from "react";

const UnmountTest = () => {
    useEffect(() => {
        console.log("mount!");
        return () => {
          //언마운트 시점에 실행
            console.log('unmount!')
        }
    }, []);
    return <div>언마운트 테스팅 컴포넌트</div>;
}

const Lifecycle = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggle = () => setIsVisible(!isVisible);

    return (
        <div style={{ padding: 20 }}>
            <button onClick={toggle}>ON/OFF</button>
            {isVisible && <UnmountTest />}
        </div>
    )
}

export default Lifecycle;