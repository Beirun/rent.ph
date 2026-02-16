// types/user.ts

export interface UserProfile {
    id: number;
    name: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string | null;
    city: string | null;
    state: string | null;
    rmpro: boolean;
    avatar: string;
    avatar_thumb: string;
    bio: string;
    reviews: any[];
    agent_title: string | null;
    listing_count: number;
}