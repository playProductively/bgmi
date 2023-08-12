"use client";

import useRoomRegister from "@/app/hooks/useRoomRegister";
import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import PrimarySquad from "../RegisterRoom/PrimarySquad";
import Register from "../RegisterRoom/Register";
import Rules from "../RegisterRoom/Rules";
import SubSqd from "../RegisterRoom/SubSqd";
import Modal from "./Modal";

function RegisterUser() {
  const roomModal = useRoomRegister();
  const [steps, setSteps] = useState(0);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    primarySquad: {
      PPlayerOne: "",
      PPlayerTwo: "",
      PPlayerThree: "",
    },
    subSqd: {
      SPlayerOne: "",
      SPlayerTwo: "",
    },
  });

  const primarySquad = watch("primarySquad");
  const subSqd = watch("subSqd");

  const setCustomValue = (id, value) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const handlePrimarySqdFormSubmit = (data) => {
    setCustomValue("primarySquad", data);
    onNext();
  };

  const handleSubSqdFormSubmit = (data) => {
    setCustomValue("subSqd", data);
    onNext();
  };

  const STEPS = {
    RULES: 0,
    PRIMARY: 1,
    SUBS: 2,
    REGISTER: 3,
  };

  let bodyContent = <Rules />;

  if (steps === STEPS.PRIMARY)
    bodyContent = (
      <PrimarySquad onSubmit={handlePrimarySqdFormSubmit} data={primarySquad} />
    );

  if (steps === STEPS.SUBS)
    bodyContent = <SubSqd onSubmit={handleSubSqdFormSubmit} data={subSqd} />;

  if (steps === STEPS.REGISTER)
    bodyContent = (
      <Register
        PlayerData={primarySquad}
        fee={roomModal.fee}
        sPlayer={subSqd}
      />
    );

  const onNext = () => setSteps((prev) => prev + 1);
  const onBack = () => setSteps((prev) => prev - 1);

  const actionLabel = useMemo(() => {
    if (steps === 3) return "Register";
    return "Next";
  }, [steps]);

  const secondaryActionLabel = useMemo(() => {
    if (steps === 0) return undefined;
    return "Back";
  }, [steps]);

  return (
    <div>
      <Modal
        title="Register For Room"
        isOpen={roomModal.isOpen}
        onClose={roomModal.onClose}
        body={bodyContent}
        onSubmit={onNext}
        actionLabel={actionLabel}
        secondaryActionLabel={secondaryActionLabel}
        secondaryAction={steps === STEPS.RULES ? undefined : onBack}
        btnType={steps === 1 || steps === 2 ? "submit" : undefined}
        myForm="primary"
        disabled={false}
      />
    </div>
  );
}

export default RegisterUser;
