import { StoreProvider } from 'app/StoreProvider';

export const StoreDecorator = (story: any) => (
    <StoreProvider>
        {story()}
    </StoreProvider>
);
