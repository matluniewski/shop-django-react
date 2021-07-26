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
    id: number;
    name: string;
    slug: string;
    price: number;
    category: string;
    description: string;
    thumbnail: string;
    in_stock: boolean;
    is_active: boolean;
}
