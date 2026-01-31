export interface Response {
  prediction: string;
  confidence: number;
  decision_source: string;
  ml_probability?: number;
  stat_probability?: number;
  final_probability?: number;
}
