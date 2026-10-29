"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-6xl px-4"
    >
      <div className="group relative overflow-hidden rounded-3xl neon-border">
        <motion.div
          initial={{ scale: 1.06 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="relative aspect-[1200/300] w-full"
        >
          <Image
            src="/banner.png"
            alt="Abrar Faiyaz banner"
            fill
            priority
            className="object-cover"
            sizes="(max-width:1024px) 100vw, 1200px"
          />
        </motion.div>

        <div className="pointer-events-none absolute inset-0 rounded-3xl">
          <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-neon/30" />
          <motion.div
            className="absolute inset-0 rounded-3xl"
            style={{
              background:
                "linear-gradient(120deg, transparent 30%, rgba(0,229,255,0.18) 50%, transparent 70%)",
            }}
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>
    </motion.section>
  );
}
