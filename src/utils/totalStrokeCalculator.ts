const totalStrokeCalculator = (holes: any) =>
    Object.values(holes).reduce(
        (total: number, { strokes }: any) => total + strokes,
        0
    );

export default totalStrokeCalculator;
