

const Footer = () => {
  return (
    <div className="mt-12 bg-white">

<div className="text-center">
  <h2 className="text-2xl font-bold pt-12">Gadget Heaven</h2>
  <p className="text-sm text-gray-500">Leading the way in cutting-edge technology and innovation.</p>
</div>
<div className="divider"></div>

      <footer className="footer p-10">
        <nav>
          <h6 className="font-bold">Services</h6>
          <a className="link link-hover text-gray-500">Product Support</a>
          <a className="link link-hover text-gray-500">
            Order Tracking

          </a>
          <a className="link link-hover text-gray-500">Shipping & Delivery</a>
          <a className="link link-hover text-gray-500">Returns</a>
        </nav>
        <nav>
          <h6 className="font-bold">Company</h6>
          <a className="link link-hover text-gray-500">About us</a>
          <a className="link link-hover text-gray-500">Careers</a>
          <a className="link link-hover text-gray-500">

            Contact</a>
          <a className="link link-hover text-gray-500">Press kit</a>
        </nav>
        <nav>
          <h6 className="font-bold">Legal</h6>
          <a className="link link-hover text-gray-500">Terms of service</a>
          <a className="link link-hover text-gray-500">Privacy policy</a>
          <a className="link link-hover text-gray-500">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;