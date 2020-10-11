import React from 'react';

export interface SubscriptionToggleProps {
    checked: boolean;
    icon: React.ReactNode;
    className?: string;
    onClick: () => any;
}
