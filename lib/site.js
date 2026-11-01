// Single source of truth for contact details and external links.
// Change a phone number here and it updates across the whole site.

const phone = (display, digits) => ({
  display,
  tel: `tel:+${digits}`,
  whatsapp: `https://wa.me/${digits}`,
});

export const site = {
  name: "Hotel Landmark",
  venueName: "Hotel Landmark Banquet & Restaurant",
  tagline: "Feel the difference",

  phones: {
    // Room bookings (calls + WhatsApp)
    booking: phone("+91 96416 93184", "919641693184"),
    // Front desk
    reception: phone("+91 75012 63184", "917501263184"),
    // Banquet & restaurant manager
    banquet: phone("+91 94758 75227", "919475875227"),
    // Guest feedback on WhatsApp
    feedback: phone("+91 94351 17480", "919435117480"),
    landlines: ["(03512) 221184", "(03512) 221560"],
  },

  email: "landmark2286@gmail.com",

  address: {
    line1: "Rabindra Avenue, Above Overseas Bank",
    line2: "Near Raj Hotel, Malda",
    region: "West Bengal 732101, India",
    short: "Rabindra Avenue, Malda",
  },

  links: {
    googleBusinessProfile: "https://maps.app.goo.gl/8qn2799ytFekerMP8",
    googleReview: "https://g.page/r/CY7o7t2FEsdPEBM/review",
    facebook: "https://www.facebook.com/profile.php?id=100095382827717",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.9858254901037!2d88.1417702!3d25.0005976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fafd0d08beb08f%3A0x38ab756ecd2fcb53!2sHotel%20Landmark%20Malda!5e0!3m2!1sen!2sin!4v1702795539511!5m2!1sen!2sin",
  },
};
