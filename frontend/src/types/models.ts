export interface BlogPostType {
    title: string;
    slug: string;
    category: string;
    thumbnail: string;
    excerpt: string;
    content: string;
    featured: boolean;
    date: string;
}

export interface ProductType {
    name: string;
    description: string;
    price: number;
    category: string;
}
