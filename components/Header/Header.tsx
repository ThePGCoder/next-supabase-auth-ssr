import User from '../User';


export default async function Header() {
  return (
    <div>
      <h3>My Auth App</h3>
      <User />
    </div>
  );
}
