import React, { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Button } from './ui/button'
import { SignedIn, SignedOut, SignInButton, SignIn, UserButton } from '@clerk/clerk-react'
import { Bookmark, BookMarkedIcon, BriefcaseBusiness, PenBox } from 'lucide-react'



const Header = () => {

    const [showSignIn, setShowSignIn] = useState(false);

    const [search, setSearch] = useSearchParams();

    useEffect(() => {
        if(search.get("sign-in")){
            setShowSignIn(true);
        }
    }, [search]);

    // clicking outside the overlay will close it
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
          setShowSignIn(false);
          setSearch({});
        }
    };

    return (
        <>
            <nav className='py-3 flex items-center justify-between'>
                <Link>
                    <img src="/logo.png" className='h-24' />
                </Link>

                <div className='flex gap-8'>
                    <SignedOut>
                        <Button onClick={() => setShowSignIn(true)} variant="outline">Login</Button>
                    </SignedOut>

                    <SignedIn>
                        {/* add condition here */}
                        <Link to="/post-job">
                            <Button variant="red" className="rounded-full">
                                <PenBox size={20} className='mr-2' />
                                Post a Job
                            </Button>
                        </Link>
                        <UserButton appearance={{
                            elements:{
                                avatarBox:"w-10 h-10"
                            }
                        }}>
                            <UserButton.MenuItems>
                                <UserButton.Link
                                    label="My Jobs"
                                    labelIcon={<BriefcaseBusiness size={15} />}
                                    href="/my-jobs"
                                />
                                <UserButton.Link
                                    label="Saved Jobs"
                                    labelIcon={<Bookmark size={15} />}
                                    href="/saved-jobs"
                                />
                            </UserButton.MenuItems>
                        </UserButton>
                    </SignedIn>

                </div>
            </nav>
            {
                showSignIn && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70"
                         onClick={handleOverlayClick}
                    >
                        <SignIn
                            signUpForceRedirectUrl="/onboarding"
                            fallbackRedirectUrl="/onboarding"
                        />
                    </div>
                )
            }
        </>
    )
}

export default Header