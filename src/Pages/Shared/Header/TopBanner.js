import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useHistory } from 'react-router';
import './TopBanner.css';
const TopBanner = () => {
    let history = useHistory();

    const handleAbout = () => {
        history.push("/about")
    }


    return (
        <div className="">
            <div className="banner">
                <div className="">
                    <h2>THE <span >RIGHT</span> PEDIATRICIAN</h2>
                    <h4>We at MediCare are always fully focused on helping your child and you to overcame any hurdle or any other problem.</h4>
                    <Button onClick={handleAbout} className="btn" variant="secondary" size="lg" active>
                        Get Details
                    </Button>
                </div>
                <div>
                    <img src="https://yt3.ggpht.com/ytc/AKedOLQ-TfQ3t1-kxvAZ1P7eg7eS78fYMHfgiuFwbbph=s900-c-k-c0x00ffffff-no-rj" alt="" />

                </div>
            </div>

        </div>
    );
};

export default TopBanner;