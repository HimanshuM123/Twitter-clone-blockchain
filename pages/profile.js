import ProfileHeader from '../components/profile/ProfileHeader';
import ProfileTweets from '../components/profile/ProfileTweets';
import Sidebar from './../components/Sidebar';
import Widgets from './../components/Widgets';

const profile = () => {
    return (
        <div className='flex justify-center h-screen w-screen select-none bg-[#15202b] text-white'>
            <div className='max-w-[1400px] w-2/3 flex justify-between'>
                <Sidebar />
                <div className='flex-[2] border-r border-l border-[#38444d]'>
                    <ProfileHeader />
                    <ProfileTweets />
                </div>
            </div>

        </div>
    )
}

export default profile