export default function GoogleMap() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6">
      <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509367!2d-0.11962348468138962!3d51.50332487963447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876035c1e75058d%3A0xf92b5b1e1e8e36bb!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2sus!4v1706826177298!5m2!1sen!2sus"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          className="border-0"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
