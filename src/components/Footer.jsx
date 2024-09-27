function Footer() {
  return (
    <div className="flex h-14 items-center justify-center border-t-2">
      <p>&copy; {new Date().getFullYear()}</p>
    </div>
  );
}

export default Footer;
