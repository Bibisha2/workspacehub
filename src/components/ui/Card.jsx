function Card({ children }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md">
      {children}
    </div>
  );
}

export default Card;