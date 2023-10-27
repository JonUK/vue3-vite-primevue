// PrimeVue is being used in unstyled mode so no PrimeVue styles are imported and
// the PrimeVue components are displayed as transparent. The module provides
// Bootstrap 5 Pass Through Props (PT) for the Bootstrap CSS classes.
// https://primevue.org/unstyled
// https://primevue.org/bootstrap

import type { PrimeVuePTOptions } from 'primevue/config';
import type { DialogPassThroughMethodOptions } from 'primevue/dialog';
import type { MenuPassThroughMethodOptions } from 'primevue/menu';
import type { ButtonPassThroughMethodOptions } from 'primevue/button';
const Bootstrap_PT: PrimeVuePTOptions = {
  button: {
    root: (options: ButtonPassThroughMethodOptions) => ({
      class: [
        'btn px-4 py-3',
        {
          'btn btn-block btn-primary': options.props.severity === null,
        },
        {
          'btn-secondary': options.props.severity === 'secondary',
          'btn-success': options.props.severity === 'success',
          'btn-info': options.props.severity === 'info',
          'btn-warning': options.props.severity === 'warning',
          'btn-purple': options.props.severity === 'help',
          'btn-danger': options.props.severity === 'danger',
        },
        {
          'shadow-lg': options.props.raised,
        },
        {
          'opacity-25 disabled': options.context.disabled,
        },
      ],
    }),
  },
  inputtext: {
    root: {
      class: 'm-0 form-control p-3 text-base',
    },
  },
  textarea: {
    root: {
      class: 'm-0 form-control p-3 text-base',
    },
  },
  datatable: {
    table: {
      class: 'table table-striped table-responsive',
    },
    column: {
      bodycell: {
        class: 'py-4',
      },
    },
  },
  panel: {
    root: {
      class: 'rounded border',
    },
    header: {
      class:
        'text-white rounded-top bg-primary p-3 d-flex align-items-center justify-content-between',
      style: 'border-bottom:1px solid #0d6efd',
    },
    content: {
      class: 'p-3  d-flex align-items-center justify-content-between',
    },
    toggler: {
      class:
        'd-inline-flex align-items-center justify-content-center position-relative text-white btn btn-primary border-0 ',
    },
  },
  progressbar: {
    root: {
      class: 'position-relative overflow-hidden border-0 rounded',
      style: 'height: 1.5rem; background-color: #edf2f7;',
    },
    value: {
      class:
        'border-0 bg-primary position-absolute align-items-center border-0 d-flex h-100 justify-content-center overflow-hidden',
    },
    label: {
      class: 'd-inline-flex text-white small',
    },
  },
  menu: {
    root: {
      class: 'py-1 bg-white border rounded',
      style: 'width: 12rem;',
    },
    menu: {
      class: 'm-0 p-0',
      style: 'list-style: none;',
    },
    action: (options: MenuPassThroughMethodOptions) => ({
      class: [
        'text-dark py-2 px-3 d-flex align-items-center',
        {
          'bg-primary text-white': options.context.focused,
        },
      ],
      style: 'text-decoration: none; cursor:pointer',
    }),
  },
  dialog: {
    mask: (options: DialogPassThroughMethodOptions) => ({
      class: [
        'modal fade opacity-0',
        {
          'show opacity-100': options.state.containerVisible,
        },
      ],
      style: {
        backgroundColor: 'rgba(0, 0, 0, .5)',
      },
    }),
    root: { class: 'modal-dialog modal-content' },
    header: { class: 'modal-header' },
    content: { class: 'modal-body' },
    closeButton: { class: 'btn' },
  },
};

export default Bootstrap_PT;
