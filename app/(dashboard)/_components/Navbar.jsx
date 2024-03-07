import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { OrganizationSwitcher, UserButton } from '@clerk/nextjs';
import { Plus } from 'lucide-react';
import React from 'react';

const Navbar = () => {
  return (
    <nav className='px-4 fixed top-0 w-full h-14 border-b shadow-sm bg-white flex items-center z-50'>
      {/* MOBILE SIDEBAR */}
      <div className='flex items-center gap-x-4 '>
        <div className='hidden md:flex'>
          <Logo />
        </div>
        <Button
          variant='primary'
          size='sm'
          className='rounded-sm  hidden md:block h-auto py-1.5 px-2'
        >
          Create
        </Button>

        <Button
          variant='primary'
          size='sm'
          className='rounded-sm  block md:hidden'
        >
          <Plus className='h-4 w-4' />
        </Button>
      </div>

      <div className='ml-auto flex items-center gap-x-2'>
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl='/organization/:id'
          afterSelectOrganizationUrl='/organization/:id'
          afterLeaveOrganizationUrl='/select-org'
          appearance={{
            elements: {
              rootBox: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              },
            },
          }}
        />

        <UserButton
          afterSignOutUrl='/'
          appearance={{
            elements: {
              avatarBox: {
                height: 30,
                width: 30,
              },
            },
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;