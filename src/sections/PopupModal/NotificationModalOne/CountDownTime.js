import React from 'react'
import { useCountdown } from './useCountDown';
import Content from "../../slices/contentStyles"

const ExpiredNotice = () => {
    return (
        <div className="expired-notice">
            <span>You have just missed it.</span>
        </div>
    );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
        <div dir="ltr" className="flex gap-x-2 w-full justify-center">
            <DateTimeDisplay value={days} type={'Days'} />

            <DateTimeDisplay value={hours} type={'Hours'} />

            <DateTimeDisplay value={minutes} type={'Mins'} />

            <DateTimeDisplay value={seconds} type={'Secs'} />

        </div>
    );
};

const DateTimeDisplay = ({ value, type }) => {
    return (
        <div className='flex flex-col text-center justify-center items-center border-2 w-24 border-secondaryShade rounded-lg p-1'>
            <Content.Text as="p" className="!text-3xl">{value}</Content.Text>
            <Content.Text as="p" >{type}</Content.Text>
        </div>
    );
};


export default function CountDownTime({ targetDate }) {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    if (days + hours + minutes + seconds <= 0) {
        return <ExpiredNotice />;
    } else {
        return (
            <ShowCounter
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
            />
        );
    }
}
