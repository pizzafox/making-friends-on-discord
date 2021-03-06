/**
 * Regular expressions for friend codes.
 */
export const friendCodeRegExps = {
	bots: /(?<first2Sections>[\d\w-]+\.){2}[\w-]+/gi,
	users: /(?<mfaPrefix>mfa\.)?[-\w+/=]{70,100}/gi
};
