import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <div className='fixed bottom-0 w-full p-3 border-t bg-slate-100'>
      <div className='md:max-w-screen-xl mx-auto flex items-center w-full justify-between'>
        <div className='space-x-4 flex items-center justify-between w-full'>
          <Button size='sm' variant='ghost'>
            Privacy Policy
          </Button>
          <Button size='sm' variant='ghost'>
            Terms of service
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
