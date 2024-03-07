import Navbar from './_components/Navbar';

const DashboardLayout = ({ children }) => {
  return (
    <div className='min-h-svh'>
      <Navbar />
      {children}
    </div>
  );
};

export default DashboardLayout;
