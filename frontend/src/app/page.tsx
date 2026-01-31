import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@nextui-org/react';

import LandingWelcome from '@/common/components/landing-welcome';

export default function HomePage() {
  return (
    <main className="flex min-h-screen gap-12 items-center justify-center p-24">
      <div className="flex flex-col gap-12 w-[55rem]">
        <h1 className="text-8xl">
          Detect deepfakes with
          <LandingWelcome />
        </h1>
        <h2 className="text-2xl">
         Not every image deserves your trust. This system analyzes frequency patterns,
texture consistency, and noise signatures to determine whether an image is
authentic or artificially generated. Designed for a world where visual truth
matters.

        </h2>
        <div className="flex gap-4 self-start">
          <Button
            as={Link}
            variant="solid"
            color="warning"
            href="/model"
          >
            Get Started
          </Button>
          <Button
            as={Link}
            variant="bordered"
            color="warning"
            href="/how-it-works"
          >
             How It Works
          </Button>
        </div>
      </div>
      <Image
        priority
        width={600}
        height={600}
        src="/landing1.webp"
        alt="deepfake-detector-landing"
        className="rounded-xl drop-shadow-xl"
      />
    </main>
  );
}
