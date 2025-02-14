import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Dialog, DialogContent, DialogTitle } from "../components/ui/dialog";

export default function AperturesLandingPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold text-emerald-500 mb-4"
      >
        Apertures AI
      </motion.h1>
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
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-gray-900 border border-emerald-500 text-white p-6 rounded-lg">
          <DialogTitle className="text-2xl font-bold text-emerald-500">
            Request Your Exclusive Invitation
          </DialogTitle>
          <form>
            <Input type="email" name="email" placeholder="Enter your email" className="p-3 rounded bg-gray-800 border border-gray-600 text-white" required />
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
