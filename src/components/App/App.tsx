import CafeInfo from '../CafeInfo/CafeInfo';
import css from './App.module.css';
import type { Votes, VoteType } from '../../types/votes';
import { useState } from 'react';
import VoteOptions from '../VoteOptions/VoteOptions';
import VoteStats from '../VoteStats/VoteStats';
import Notification from '../Notification/Notification';

const initVotes: Votes = {
    good: 0,
    neutral: 0,
    bad: 0,
};

export default function App() {
    const [votes, setVotes] = useState<Votes>(initVotes);

    const handleVote = (key: VoteType) => {
        setVotes({ ...votes, [key]: votes[key] + 1 });
    };

    const resetVotes = () => {
        setVotes(initVotes);
    };

    const totalVotes = Object.values(votes).reduce(
        (acc, vote) => acc + vote,
        0,
    );
    const positiveRate = totalVotes
        ? Math.round((votes.good * 100) / totalVotes)
        : 0;

    const canReset = totalVotes > 0;

    return (
        <div className={css.app}>
            <CafeInfo />
            <VoteOptions
                onVote={handleVote}
                onReset={resetVotes}
                canReset={canReset}
            />
            {totalVotes > 0 ? (
                <VoteStats
                    votes={votes}
                    positiveRate={positiveRate}
                    totalVotes={totalVotes}
                />
            ) : (
                <Notification />
            )}
        </div>
    );
}
