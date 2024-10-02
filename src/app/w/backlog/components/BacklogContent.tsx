"use client";
import { ButtonConfig } from "@/app/ui/ButtonConfig";
import { Tooltip } from "react-tooltip";
import { Dialog, Heading, Modal, ModalOverlay } from "react-aria-components";
import { useState } from "react";
import { BeginSprint } from "./sprint/begin-sprint";

export const BacklogContent = () => {
  let [isOpen, setOpen] = useState(false);
  const sprints = [1];
  const items = [1, 2, 3, 4];
  const toOpenModal = () => {
    console.log("toOpenModal");
    setOpen(true);
  };
  return (
    <>
      <div className="pt-4 overflow-y-auto h-full">
        <div id="sprint-section-header" className="mb-6 rounded border-[0.5px]  border-zinc-700">
          <header id="sprint-header" className="flex flex-row justify-between p-2 bg-zinc-800 rounded-t shadow-lg">
            <div id="sprint-header-left" className="text-center flex items-center font-bold">
              Backlog
            </div>
            <div id="sprint-header-left" className="flex flex-row justify-center items-center">
              <div className="bg-green-600 rounded-full px-1 mr-2">1</div>
              <div className="bg-blue-600 rounded-full px-1 mr-2">2</div>
              <div className="bg-gray-500 rounded-full px-1 mr-2">0</div>
              <Tooltip
                id="my-tooltip"
                className="custome-tooltip-1"
                style={{ backgroundColor: "#18181b", color: "white", border: "solid", borderColor: "white" }}
              />
              <button
                className="bg-indigo-600 p-1 mr-2 rounded px-4"
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Hello world!"
                data-tooltip-place="top"
                onClick={toOpenModal}
              >
                Create Issue
              </button>

              <ButtonConfig></ButtonConfig>
            </div>
          </header>
          <section>
            {items.map((index: number) => (
              <>
                <div id="sprint-section-content" className="flex flex-row justify-between p-2" key={index}>
                  <div id="sprint-item-left" className="flex flex-row">
                    <div className="font-bold flex items-center justify-center bg-red-800 rounded w-[25px] h-[25px] mr-2 "></div>
                    <span>DM-1 fix the bug on the navigation bar</span>
                  </div>
                  <div id="sprint-item-right" className="flex flex-row">
                    <select name="pets" id="pet-select" className="text-white pl-2 bg-zinc-600 rounded">
                      <option value="">Todo</option>
                      <option value="dog">Doing</option>
                      <option value="cat">Done</option>
                    </select>
                    <div className="ml-2 font-bold flex items-center justify-center bg-red-800 rounded-full w-[25px] h-[25px]">
                      P
                    </div>
                  </div>
                </div>
                <hr className=" border-zinc-700" />
              </>
            ))}
          </section>
        </div>
        {sprints.map((index: number) => (
          <div id="sprint-section-header" className="mb-6 rounded border-[0.5px]  border-zinc-700" key={index}>
            <header id="sprint-header" className="flex flex-row justify-between p-2 bg-zinc-800 rounded-t shadow-lg">
              <div id="sprint-header-left" className="text-center flex items-center font-bold">
                Sprint {index} (3 issues)
              </div>
              <div id="sprint-header-left" className="flex flex-row justify-center items-center">
                <button className="bg-indigo-600 p-1 mr-2 rounded px-4">Create Issue</button>
                <button className="bg-indigo-600 p-1 mr-2 rounded px-4">Start Sprint</button>
                <ButtonConfig></ButtonConfig>
              </div>
            </header>
            <section>
              {items.map((index: number) => (
                <>
                  <div id="sprint-section-content" className="flex flex-row justify-between p-2" key={index}>
                    <div id="sprint-item-left" className="flex flex-row">
                      <div className="font-bold flex items-center justify-center bg-red-800 rounded w-[25px] h-[25px] mr-2 "></div>
                      <span>DM-1 fix the bug on the navigation bar</span>
                    </div>
                    <div id="sprint-item-right" className="flex flex-row">
                      <select name="pets" id="pet-select" className="text-white pl-2 bg-zinc-600 rounded">
                        <option value="">Todo</option>
                        <option value="dog">Doing</option>
                        <option value="cat">Done</option>
                      </select>
                      <div className="ml-2 font-bold flex items-center justify-center bg-red-800 rounded-full w-[25px] h-[25px]">
                        P
                      </div>
                    </div>
                  </div>
                  <hr className=" border-zinc-700" />
                </>
              ))}
            </section>
          </div>
        ))}
      </div>
      <Modal isDismissable isOpen={isOpen} onOpenChange={setOpen}>
        <Dialog>
          {/* <Heading slot="title">Notice</Heading> */}
          <BeginSprint></BeginSprint>
        </Dialog>
      </Modal>
    </>
  );
};
