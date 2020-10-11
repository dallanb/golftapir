export interface ContestSubscriptionProps {
    subscribed: boolean;
    uuid: string;
    subscribe: (uuid: string) => void;
    unsubscribe: (uuid: string) => void;
}
