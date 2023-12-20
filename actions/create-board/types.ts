import { z } from "zod";
import { Board } from "@prisma/client";

import { ActionState } from "@/lib/create-safe-action";
import { CreateBoard } from "./schema";

// InputType Digunakan untuk menentukan inputan yang diperlukan
export type InputType = z.infer<typeof CreateBoard>;
// Return Type di gunakan untuk menentukan Inpu type filter dan schema data Board
export type ReturnType = ActionState<InputType, Board>;
