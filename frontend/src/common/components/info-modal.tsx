'use client';

import { useContext } from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from '@nextui-org/react';

import { DeepfakeContext } from '@/helpers';

export default function InfoModal() {
  const { isOpen, onOpenChange } = useContext(DeepfakeContext);

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="lg"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="text-2xl font-bold">
              AI Image Authenticity Detector
            </ModalHeader>

            <ModalBody className="space-y-4 text-zinc-700 leading-relaxed">
              <p>
                This system is designed to determine whether an image is real or
                AI-generated using structural and statistical analysis.
              </p>

              <p>
                Instead of relying on surface-level visual cues, the detector
                examines frequency patterns, texture consistency, and pixel-level
                noise artifacts that are difficult for generative models to
                reproduce accurately.
              </p>

              <p>
                Multiple independent signals are fused into a probabilistic
                machine learning model that outputs an authenticity score,
                improving robustness against manipulation and post-processing.
              </p>

              <p className="text-sm text-zinc-500">
                Built to combat misinformation and help restore trust in digital
                media.
              </p>
            </ModalBody>

            <ModalFooter>
              <Button color="warning" onPress={onClose}>
                Got it!
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
