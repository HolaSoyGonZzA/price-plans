export type Feature = {
  name: string;
  active: boolean;
};

const FEATURES = [
  "Full courses library",
  "A new daily meditation",
  "Access to the meditation guru",
  "Sleep podcasts and exercises",
  "Mindfulness exercises",
  "Guided meditations",
  "Cooking recipes",
];

const useFeature = () =>
  FEATURES.reduce(
    (previous, current, index) => {
      previous.starterFeatures.push({ name: current, active: index < 3 });

      previous.proFeatures.push({ name: current, active: index < 5 });

      previous.teamsFeatures.push({
        name: current,
        active: true,
      });

      return previous;
    },
    {
      starterFeatures: [] as Feature[],
      proFeatures: [] as Feature[],
      teamsFeatures: [] as Feature[],
    }
  );

export default useFeature;
