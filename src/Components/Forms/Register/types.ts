type sportsmanForm = {
  name: string
  email: string
  phone: string
}
type communityForm = {
  name: string
  email: string
  phone: string
  url: string
}
type organizationForm = {
  inn: string
  url: string
  name: string
  email: string
  phone: string
}
type volunteerForm = {
  name: string
  email: string
  phone: string
}

export const sportsman = [
  {
    typeInput: 'name',
    validation: {
      required: true,
    }
  },
  {
    typeInput: 'email',
    validation: {
      required: true,
    }
  },
  {
    typeInput: 'phone',
    validation: {
      required: false,
    }
  },
]
export const community = [
  {
    typeInput: 'name',
    validation: {
      required: true,
    }
  },
  {
    typeInput: 'email',
    validation: {
      required: true,
    }
  },
  {
    typeInput: 'phone',
    validation: {
      required: false,
    }
  },
  {
    typeInput: 'url',
    validation: {
      required: true,
    }
  },
]
export const organization = [
  {
    typeInput: 'name',
    validation: {
      required: true,
    }
  },
  {
    typeInput: 'email',
    validation: {
      required: true,
    }
  },
  {
    typeInput: 'phone',
    validation: {
      required: false,
    }
  },
  {
    typeInput: 'url',
    validation: {
      required: true,
    }
  },
  {
    typeInput: 'inn',
    validation: {
      required: true,
    }
  }
]
export const volunteer = [{
  typeInput: 'name',
  validation: {
    required: true,
  }
},
{
  typeInput: 'email',
  validation: {
    required: true,
  }
},
{
  typeInput: 'phone',
  validation: {
    required: false,
  }
},
{
  typeInput: 'url',
  validation: {
    required: true,
  }
},]

