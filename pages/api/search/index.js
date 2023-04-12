import { sample } from "../../../data/search";

export default function handeler(req, res) {
  res.status(200).json(sample);
}
