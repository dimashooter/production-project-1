import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { getCounterValue } from '../modal/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../modal/slice/counterSlice';

export const Counter: FC = () => {
    const dispatch = useDispatch();
    const value = useSelector(getCounterValue);
    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };
    return (

        <div>
            <h1 data-testid="value-title">
                {value}
            </h1>

            <Button data-testid="increment-btn" onClick={increment}>+</Button>
            <Button data-testid="decrement-btn" onClick={decrement}>-</Button>
        </div>
    );
};
