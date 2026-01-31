import {
  Modal,
  Button,
  Spinner,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalContent,
} from '@nextui-org/react';
import Image from 'next/image';

import { Response } from '@/types/response';

type ResponseModalProps = {
  isOpen: boolean;
  isLoading: boolean;
  file: File | undefined;
  onOpenChange: () => void;
  response: Response | undefined;
};

export default function ResponseModal({
  file,
  isOpen,
  response,
  isLoading,
  onOpenChange,
}: ResponseModalProps) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>Our Prediction</ModalHeader>

            <ModalBody className="flex flex-row items-center gap-6">
              {isLoading ? (
                <Spinner label="Analyzing image..." color="warning" />
              ) : (
                <>
                  {/* IMAGE PREVIEW */}
                  <Image
                    width={128}
                    height={128}
                    alt="detected-image"
                    className="rounded-md"
                    src={file ? URL.createObjectURL(file) : '/user.png'}
                  />

                  {/* RESULT DETAILS */}
                  <div className="flex flex-col gap-3">
                    <p>
                      <strong>Filename:</strong>{' '}
                      <span>{file?.name ?? '—'}</span>
                    </p>

                    <p>
                      <strong>Prediction:</strong>{' '}
                      <span
                        className={
                          response?.prediction === 'AI GENERATED'
                            ? 'text-danger font-semibold'
                            : 'text-success font-semibold'
                        }
                      >
                        {response?.prediction ?? '—'}
                      </span>
                    </p>

                    <p>
                      <strong>Confidence:</strong>{' '}
                      <span className="font-semibold">
                        {response?.confidence
                          ? `${response.confidence}%`
                          : '—'}
                      </span>
                    </p>

                    <p className="text-sm text-gray-500">
                      <strong>Source:</strong>{' '}
                      {response?.decision_source ?? '—'}
                    </p>
                  </div>
                </>
              )}
            </ModalBody>

            <ModalFooter>
              <Button color="warning" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
