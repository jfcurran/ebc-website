type IconProps = {
  className?: string
}

const TelegramIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox='0 0 32 32'>
    <path d='M29.61 3.27376C29.4551 3.13997 29.2666 3.051 29.0648 3.01641C28.863 2.98183 28.6557 3.00296 28.465 3.07751L3.13251 12.9913C2.77349 13.1309 2.46954 13.3833 2.26642 13.7106C2.06329 14.0379 1.97199 14.4224 2.00625 14.806C2.04052 15.1897 2.1985 15.5519 2.4564 15.838C2.71431 16.1241 3.05819 16.3187 3.43626 16.3925L10 17.6813V25C9.99872 25.3987 10.1172 25.7885 10.3401 26.119C10.5629 26.4496 10.8799 26.7055 11.25 26.8538C11.6195 27.0046 12.0258 27.0409 12.4162 26.9577C12.8065 26.8746 13.1628 26.6759 13.4388 26.3875L16.6038 23.105L21.625 27.5C21.9873 27.8213 22.4545 27.9992 22.9388 28C23.151 27.9998 23.3618 27.9665 23.5638 27.9013C23.8937 27.7966 24.1904 27.6073 24.4245 27.3522C24.6585 27.0971 24.8216 26.7852 24.8975 26.4475L29.9713 4.37501C30.0166 4.17595 30.007 3.96829 29.9434 3.77429C29.8797 3.58029 29.7645 3.40727 29.61 3.27376ZM21.9675 7.77376L10.7688 15.7938L4.56876 14.5775L21.9675 7.77376ZM12 25V19.065L15.0988 21.7825L12 25ZM22.9413 26L12.6063 16.9375L27.4813 6.27626L22.9413 26Z' />
  </svg>
)

export default TelegramIcon
