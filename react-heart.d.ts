declare module 'react-heart' {
    import { FC } from 'react';

    const Heart: FC<{ isActive: boolean; onClick: () => void }>;
    export default Heart;
}
