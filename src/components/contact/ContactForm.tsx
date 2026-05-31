// "use client";

// import { useState } from "react";

// export default function ContactForm() {
//   const [loading, setLoading] = useState(false);

//   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();

//     const formData = new FormData(e.currentTarget);

//     setLoading(true);

//     // await fetch("/api/contact", {
//     //   method: "POST",
//     //   body: JSON.stringify({
//     //     name: formData.get("name"),
//     //     email: formData.get("email"),
//     //     phone: formData.get("phone"),
//     //     company: formData.get("company"),
//     //     service: formData.get("service"),
//     //     message: formData.get("message"),
//     //   }),
//     });

//     setLoading(false);

//     alert("Message Sent Successfully");
//   }

//   return (
//     <form onSubmit={handleSubmit} className="space-y-5">
//       <input
//         name="name"
//         placeholder="Full Name"
//         required
//         className="w-full rounded-xl border p-4"
//       />

//       <input
//         name="email"
//         type="email"
//         placeholder="Email"
//         required
//         className="w-full rounded-xl border p-4"
//       />

//       <input
//         name="phone"
//         placeholder="Phone Number"
//         className="w-full rounded-xl border p-4"
//       />

//       <input
//         name="company"
//         placeholder="Company Name"
//         className="w-full rounded-xl border p-4"
//       />

//       <select name="service" className="w-full rounded-xl border p-4">
//         <option>Accounting</option>
//         <option>GST Compliance</option>
//         <option>Income Tax</option>
//         <option>Audit Support</option>
//         <option>Business Advisory</option>
//       </select>

//       <textarea
//         name="message"
//         rows={5}
//         placeholder="Tell us about your requirement"
//         className="w-full rounded-xl border p-4"
//       />

//       <button
//         disabled={loading}
//         className="w-full rounded-xl bg-yellow-500 py-4 font-semibold"
//       >
//         {loading ? "Sending..." : "Send Message"}
//       </button>
//     </form>
//   );
// }
