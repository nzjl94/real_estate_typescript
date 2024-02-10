export const getErrorMessage = (fieldName: string, errs: Record<string, any>): string | undefined =>
    typeof errs?.[fieldName]?.message === 'string' ? errs?.[fieldName]?.message : undefined;

