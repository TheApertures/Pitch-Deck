import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export default function AperturesLandingPage() {
  const [open, setOpen] = useState(false);

  const membershipTiers = [
    { name: "Founder's Circle", level: "F/1.4", fee: "$1,000,000/year", minSpend: "$500,000", members: 10, perks: "Private jet access, concierge AI wealth management, ultra-exclusive investment opportunities." },
    { name: "Executive", level: "F/2.0", fee: "$500,000/year", minSpend: "$300,000", members: 20, perks: "Bespoke portfolio management, luxury travel benefits, premium networking events." },
    { name: "Influencer", level: "F/2.8", fee: "$250,000/year", minSpend: "$150,000", members: 40, perks: "VIP event invitations, brand partnerships, digital asset consulting." },
    { name: "Connoisseur", level: "F/4.0", fee: "$100,000/year", minSpend: "$75,000", members: 60, perks: "Fine art advisory, exclusive real estate investment deals, tailored travel experiences." },
    { name: "Insider", level: "F/5.6", fee: "$50,000/year", minSpend: "$50,000", members: 80, perks: "AI-driven networking insights, select luxury perks, high-end market intelligence." },
    { name: "Observer", level: "F/8.0", fee: "$10,000/year", minSpend: "$100,000", members: 100, perks: "Entry-level access to curated content, virtual networking events, introductory investment tools." },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log("Submitted Email:", email); // Replace with your logic
    setOpen(false); // Close the modal after submission
  };

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      {/* Background Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-gradient-to-r from-emerald-900 via-black to-gray-900 opacity-90 z-0"
      />

      {/* Content */}
      <div className="relative z-10 text-center mt-12">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-emerald-500 mb-4"
        >
          Apertures AI
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-gray-300 text-lg max-w-2xl mx-auto"
        >
          The Future of AI-Powered Wealth. Exclusive Memberships, Elite Investments, and Intelligent Financial Strategies.
        </motion.p>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.7 }}
          className="text-xl text-emerald-400 mt-4"
        >
          "See More, Know More, Do More."
        </motion.h2>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-6"
        >
          <Button className="bg-emerald-500 text-white px-6 py-3 rounded-lg text-lg" onClick={() => setOpen(true)}>
            Request Invitation
          </Button>
        </motion.div>
      </div>

      {/* Membership Tiers */}
      <div className="relative z-10 text-center mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {membershipTiers.map((tier, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-6 rounded-lg border border-emerald-500 shadow-lg cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <h3 className="text-2xl font-semibold text-white">{tier.name}</h3>
            <p className="text-gray-400">{tier.level}</p>
            <p className="text-emerald-400 text-lg font-bold mt-2">Membership Fee: {tier.fee}</p>
            <p className="text-gray-400 mt-1">Minimum Spend: {tier.minSpend}</p>
            <p className="text-gray-400 mt-1">Members: {tier.members}</p>
            <p className="text-gray-300 mt-2">{tier.perks}</p>
          </motion.div>
        ))}
      </div>

      {/* Invitation Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-gray-900 border border-emerald-500 text-white p-6 rounded-lg">
          <DialogTitle className="text-2xl font-bold text-emerald-500">
            Request Your Exclusive Invitation
          </DialogTitle>
          <p className="text-gray-300 mb-4">
            Enter your email to apply for early access to Apertures AI.
          </p>
          <form onSubmit={handleSubmit}>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="p-3 rounded bg-gray-800 border border-gray-600 text-white"
              required
            />
            <Button type="submit" className="mt-4 bg-emerald-500 text-white px-6 py-3 rounded-lg w-full">
              Apply Now
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
