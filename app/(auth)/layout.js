const AuthLayout = ({ children }) => {
  return (
    <div className='min-h-svh flex items-center justify-center'>
      <main>{children}</main>
    </div>
  );
};

export default AuthLayout;
