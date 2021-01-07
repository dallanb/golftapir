export const formatCourseAddress = (course: any) => {
    const { city, province, country } = course;
    return `${city}, ${province}, ${country}`;
};
