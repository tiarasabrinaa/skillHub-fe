import MainLayout from '../layouts/MainLayout';
import Post from '../components/Post';
import UserRecommendations from '../components/UserRecommendations';
import { posts } from '../data/PostData';

export default function Home() {
    return (
        <MainLayout>
            <div className="flex">
                <div className="w-3/4">
                    {/* Map through postsData to display posts */}
                    {posts.map((post, index) => (
                        <Post key={index} post={post} />
                    ))}
                </div>
                <div className="w-1/4">
                    {/* User recommendations */}
                    <UserRecommendations />
                </div>
            </div>
        </MainLayout>
    );
}
