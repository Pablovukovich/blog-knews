const Titulo = ({ children }) => {
  return (
    <h1 className={` block w-full border-b-2 border-primary text-4xl font-bold text-gray-900 dark:text-primary px-5 py-2`}>
      {children}
    </h1>
  );
} 
export default Titulo;